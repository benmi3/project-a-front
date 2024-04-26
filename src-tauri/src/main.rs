// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use command::{greet, task};
use lib_httpc;
mod api;
mod model;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, task])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
