// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use lib_http_client::Client;
//use tauri::State;
//use tauri::api::shell;
//use tauri::{CustomMenuItem, Manager, Menu, Submenu};
mod error;
mod http_requests;
mod command;
mod model;

use crate::command::{greet, task, backend_add}; // Temp
use crate::command::auth::{login}; // User Login

fn main() {
    let ctx = tauri::generate_context!();
    let hc = create_http_client();
    tauri::Builder::default()
        .manage(hc)
        .invoke_handler(tauri::generate_handler![greet, task, backend_add, login])
        .run(ctx)
        .expect("error while running tauri application");
}

async fn create_http_client() -> Client{
    // Will use unwrap here for this, as without a http client
    // There is no way to get any data
    lib_http_client::new_client("http://localhost:8080").unwrap()
}