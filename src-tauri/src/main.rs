// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

//use tauri::api::shell;
//use tauri::{CustomMenuItem, Manager, Menu, Submenu};

mod api;
mod command;
mod model;

use command::{backend_add, greet, task};

fn main() {
    let ctx = tauri::generate_context!();
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, task, backend_add])
        .run(ctx)
        .expect("error while running tauri application");
}
