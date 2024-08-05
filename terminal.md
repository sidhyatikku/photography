### Code to list all the images in the folder

cd path/to/your/img

ls *.jpg | wc -l
ls *.jpg
for file in *.jpg; do echo -n "'img/export/$file',"; done > image_filenames.txt
