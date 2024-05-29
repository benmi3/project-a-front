pub mod client;
pub mod cookie;
pub mod error;
pub mod response;

pub use self::error::{Error, Result};

// public re-exports
//pub use crate::client::new_client;
//pub use crate::client::new_client_with_reqwest;
//pub use crate::client::Client;
//pub use crate::cookie::Cookie;
//pub use crate::error::Error;
//pub use crate::response::Response;
