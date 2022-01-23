import fetch from "node-fetch";

export async function fetchTtl(resource: string): Promise<string> {
  try {
    const response = await fetch(resource, {
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
