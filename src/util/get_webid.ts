import { DataFactory } from "n3";
import { fetchTtl } from "./fetch_ttl";
import type { IWebId } from "../type/i_webid";
import { loadRdfString } from "../util/load_rdf_string";

export async function getWebid(webid: string): Promise<IWebId> {
  return {
    oidcIssuer: new Set(
      loadRdfString(await fetchTtl(webid))
        .getQuads(
          null,
          DataFactory.namedNode("http://www.w3.org/ns/solid/terms#oidcIssuer"),
          null,
          null
        )
        .map((x) => x.object.value)
    ),
  };
}
