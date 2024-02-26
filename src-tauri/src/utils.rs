use std::{fs, io::Error};

// when error == not a directory, make explorer read file instead of dir

pub fn get_files(dir: &str) -> Result<Vec<String>, Error> {
    match fs::read_dir(dir) {
        Ok(files) => Ok(files
            .into_iter()
            .map(|entry| String::from(entry.unwrap().path().to_str().unwrap()))
            .collect()),
        Err(e) => Err(e),
    }
}
