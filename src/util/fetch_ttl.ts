import fetch from "node-fetch";
import { URL } from "url";

export async function fetchTtl(resource: string): Promise<string> {
  let resourceUrl: URL;
  try {
    resourceUrl = new URL(resource);
  } catch (e: unknown) {
    throw new Error(`The resource ${resource} is not a parseable URL.`);
  }
  try {
    const response = await fetch(resourceUrl.toString(), {
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Accept: "text/turtle",
      },
    });
    return response.text();
  } catch (e: unknown) {
    throw new Error(`Failed to dereference resource ${resource}`);
  }
}
