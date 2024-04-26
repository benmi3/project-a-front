#[tauri::command]
pub fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

#[tauri::command]
pub fn task(title: &str) -> String {
    format!("Task, {}!", title)
}
