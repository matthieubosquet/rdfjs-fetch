import type { Quad } from "n3";
import { Parser, Store } from "n3";

export function loadRdfString(
  rdf: string,
  store: Store<Quad> = new Store()
): Store<Quad> {
  try {
    store.addQuads(new Parser().parse(rdf));
    return store;
  } catch (e: unknown) {
    throw new Error(`Failed parsing RDF string ${rdf}`);
  }
}
