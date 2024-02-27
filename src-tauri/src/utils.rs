use std::{fs, io::Error};

// when error == not a directory, make explorer read file instead of dir

pub fn get_files(dir: &str) -> Result<Vec<Vec<String>>, Error> {
    match fs::read_dir(dir) {
        Ok(files) => {
            let paths = files
                .into_iter()
                .map(|entry| {
                    let binding = entry.unwrap().path();
                    let raw = binding.to_str().unwrap();
                    raw.split("\\").map(|part| {
                        String::from(part)
                    }).collect()
                })
                .collect();

                Ok(paths)
        }       
        Err(e) => Err(e),
    }
}
