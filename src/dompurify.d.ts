declare module "dompurify" {
  export interface Config {
    ALLOWED_TAGS?: string[];
    ALLOWED_ATTR?: string[];
    ADD_ATTR?: string[];
  }

  interface DOMPurifyI {
    sanitize(source: string | Node, config?: Config): string;
    addHook(hookName: string, hook: (node: Element) => void): void;
    removeHook(hookName: string, hook: (node: Element) => void): void;
  }

  const DOMPurify: DOMPurifyI;
  export default DOMPurify;
}
