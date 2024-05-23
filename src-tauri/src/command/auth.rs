use lib_http_client::Client;
use crate::command::{Error, Result};
use crate::http_requests::auth;
use tauri::State;



#[tauri::command(async)]
pub async fn login<'r>(username: &str, password: &str, hc: State<'r, Client>) -> Result<bool> {
    // TODO: Add username and password symbol check here.

   Ok(auth::login_request(username, password, hc).await?)



}
