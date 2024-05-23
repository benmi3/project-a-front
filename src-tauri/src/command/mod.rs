pub mod user;
pub mod auth;
mod error;


pub use self::error::{Error, Result};

#[tauri::command]
pub fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

#[tauri::command]
pub fn task(title: &str) -> String {
    format!("Task, {}!", title)
}

#[tauri::command]
pub fn backend_add(number: i32) -> i32 {
    // Note: these commands block the main thread and hang the UI until they return.
    // If you need to run a long-running task, use async command instead.
    println!("Backend was called with an argument: {}", number);
    number + 2
}
