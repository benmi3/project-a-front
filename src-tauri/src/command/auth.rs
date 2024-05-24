use crate::command::{Error, Result};
use crate::http_requests::auth;
use lib_http_client::Client;
use tauri::State;

#[tauri::command(async)]
pub async fn login<'r>(username: &str, password: &str, &hc: State<'r, &Client>) -> Result<bool> {
    // TODO: Add username and password symbol check here.

    Ok(auth::login_request(username, password, hc).await?)
}
