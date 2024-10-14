declare class XHR extends XMLHttpRequest {
  _url: URL;
  nodejsHttpAgent?: any;
  nodejsHttpsAgent?: any;
  nodejsBaseUrl?: string;
  _sendHxxpRequest(): void;
}

export { XHR as XMLHttpRequest };
