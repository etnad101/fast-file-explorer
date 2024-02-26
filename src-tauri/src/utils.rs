use std::fs;

pub fn get_files(dir: &str) -> Vec<String> {
    fs::read_dir(dir)
        .unwrap()
        .into_iter()
        .map(|entry| String::from(entry.unwrap().path().to_str().unwrap()))
        .collect()
}
