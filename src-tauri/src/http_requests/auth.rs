use tauri_plugin_http;

use serde_json::json;

use crate::http_requests::{Error, Result};

use tauri::State;

pub async fn login_request<'r>(username: &str, password: &str) -> Result<bool> {
    let hc = tauri_plugin_http::reqwest::Client::new();

    let req_login = hc.do_post(
        "/api/login",
        json!({
            "username": username,
            "pwd": password
        }),
    );
    let login_response = req_login.await?;

    let login_result = login_response.json_value::<bool>("/result/success");
    Ok(login_result?)
}
