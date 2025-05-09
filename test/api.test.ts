import { describe, expect, jest, test } from "@jest/globals";
import {
  AccountsApi,
  ApiKeySession,
  CampaignMessageCreateQueryResourceObjectAttributes,
  CampaignResponseObjectResourceAttributes,
  CampaignsEmailTrackingOptions,
  EmailSendOptions,
  OAuthBasicSession,
  ObjectSerializer,
  RetryWithExponentialBackoff,
} from "../api";
import axios, { AxiosError } from "axios";

jest.mock("axios", () => jest.fn());
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockIsAxiosError = (payload: any): payload is AxiosError => {
  return jest.requireActual<typeof axios>("axios").isAxiosError(payload);
};

Object.defineProperty(axios, "isAxiosError", {
  value: mockIsAxiosError,
  configurable: true,
  writable: true,
});

beforeEach(() => {
  jest.resetAllMocks();
});

describe("retry", () => {
  test("tests that no retry happens ", async () => {
    mockedAxios.mockRejectedValue({
      isAxiosError: true,
      response: {
        status: 401,
      },
    });
    const session = new OAuthBasicSession(
      "fake-key",
      new RetryWithExponentialBackoff({ numRetries: 2 })
    );
    const accountsApi = new AccountsApi(session);
    try {
      await accountsApi.getAccount("fake_id");
    } catch (e) {
      expect(mockedAxios).toHaveBeenCalledTimes(1);
    }
  });

  test("tests that retry happens 2 times", async () => {
    mockedAxios.mockRejectedValue({
      isAxiosError: true,
      response: {
        status: 429,
      },
    });
    const session = new OAuthBasicSession(
      "fake-key",
      new RetryWithExponentialBackoff({ numRetries: 2 })
    );
    const accountsApi = new AccountsApi(session);
    try {
      await accountsApi.getAccount("fake_id");
    } catch (e) {
      expect(mockedAxios).toHaveBeenCalledTimes(2);
    }
  });

  test("tests that retry happens 3 times by default", async () => {
    mockedAxios.mockRejectedValue({
      isAxiosError: true,
      response: {
        status: 429,
      },
    });

    const accountsApi = new AccountsApi(new ApiKeySession("fake-key"));
    try {
      await accountsApi.getAccount("fake_id");
    } catch (e) {
      expect(mockedAxios).toHaveBeenCalledTimes(3);
    }
  });
});

describe("Serialize", () => {
  test("an oneOf item serializes correctly", async () => {
    let campaign: CampaignMessageCreateQueryResourceObjectAttributes = {
      definition: {
        label: "labelxyz",
        channel: "email",
        content: {
          subject: "Hello",
          fromEmail: "foo.bar@example.com",
          fromLabel: "Foo Bar",
        },
      },
    };
    const serialized = ObjectSerializer.serialize(
      campaign,
      "CampaignMessageCreateQueryResourceObjectAttributes"
    );
    expect(serialized).toEqual({
      definition: {
        label: "labelxyz",
        channel: "email",
        content: {
          subject: "Hello",
          from_email: "foo.bar@example.com",
          from_label: "Foo Bar",
        },
      },
    });
  });
});

describe("deserialize", () => {
  test("an oneOf item deserializes correctly", async () => {
    const serialized = {
      name: "Email",
      status: "Draft",
      archived: false,
      audiences: {
        included: ["TEST_ID"],
        excluded: [],
      },
      send_options: {
        use_smart_sending: true,
        ignore_unsubscribes: false,
      },
      tracking_options: {
        is_tracking_clicks: true,
        is_tracking_opens: true,
        add_tracking_params: true,
        custom_tracking_params: [],
      },
      send_strategy: {
        method: "static",
        options: {
          is_local: false,
          send_past_recipients_immediately: null,
        },
        datetime: "2024-05-22T19:14:32+00:00",
      },
      created_at: "2024-05-22T19:14:32.047339+00:00",
      scheduled_at: null,
      updated_at: "2024-05-22T19:14:32.140795+00:00",
      send_time: null,
    };
    const deserialize: CampaignResponseObjectResourceAttributes =
      ObjectSerializer.deserialize(
        serialized,
        "CampaignResponseObjectResourceAttributes"
      );
    expect(deserialize.trackingOptions).toBeInstanceOf(
      CampaignsEmailTrackingOptions
    );
    expect(deserialize.sendOptions).toBeInstanceOf(EmailSendOptions);
  });
});
