Step 1: Install npm

$ sudo apt-get install npm
$ sudo npm install
$ node server.js

Step 2: Install docker and docker-compose

docker: https://docs.docker.com/install/linux/docker-ce/ubuntu/


docker-compose: https://docs.docker.com/compose/install/

Step 3: Build image


$ sudo build -t <imagename:version> [PATH]

Step 4: sudo docker images //displays all the images

Step 5: sudo docker run -it <imagename:version>  //Run the build image

Step 6: sudo docker run -it -d -p <outside_port_number:inside_port_number> <imagename:version>
