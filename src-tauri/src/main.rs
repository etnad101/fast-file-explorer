// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod utils;

use utils::get_files;

#[tauri::command]
fn get_dir(dir: &str) -> Vec<Vec<String>> {
    match get_files(dir) {
        Ok(files) => files,
        Err(e) => vec![vec![e.to_string()]],
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_dir])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
