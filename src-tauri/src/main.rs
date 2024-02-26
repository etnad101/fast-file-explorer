// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod utils;
use utils::get_files;

#[tauri::command]
fn get_dir(dir: &str) -> Vec<String> {
    get_files(dir)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_dir])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}