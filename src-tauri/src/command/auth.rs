use crate::command::{Error, Result};
use crate::http_requests::auth;

#[tauri::command]
pub async fn login<'r>(username: &str, password: &str) -> Result<bool> {
    // TODO: Add username and password symbol check here.

    Ok(auth::login_request(username, password).await?)
}
