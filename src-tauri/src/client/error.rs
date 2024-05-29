use tauri_plugin_http::reqwest::Method;

pub type Result<T> = core::result::Result<T, Error>;

#[derive(thiserror::Error, Debug)]
pub enum Error {
    #[error("Generic error: {0}")]
    Generic(String),

    #[error("Static error: {0}")]
    Static(&'static str),

    #[error(
        "Method not supported for client.do_push (only POST, PUSH, PATCH). Was: {given_method}"
    )]
    NotSupportedMethodForPush { given_method: Method },

    #[error("Not Json value at json pointer: {json_pointer}")]
    NoJsonValueFound { json_pointer: String },

    #[error(transparent)]
    IO(#[from] std::io::Error),

    #[error(transparent)]
    Reqwest(#[from] tauri_plugin_http::reqwest::Error),

    #[error(transparent)]
    SerdeJson(#[from] serde_json::Error),
}
