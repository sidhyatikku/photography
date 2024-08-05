### Code to list all the images in the folder

cd path/to/your/img
ls *.jpg *.png *.jpeg *.gif | awk '{print "img/" $0}' | awk '{print "\"" $0 "\""}' | awk '{printf "%s, ", $0}' | sed 's/, $//'
