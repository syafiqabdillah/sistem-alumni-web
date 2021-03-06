# Sistem Alumni Yayasan Asy Syaamil

Author: Syafiq Abdillah Umarghanis abdillah.syafiq@gmail.com
## System Requirements
- Git
- Node 12.x
## Production Setup

1. Clone app's repository using git
``` bash
$ git clone https://github.com/syafiqabdillah/sistem-alumni-web
```
2. Change current directory to `sistem-alumni-web`
``` bash
$ cd sistem-alumni-web
``` 
3. Install all dependencies 
``` bash
$ npm install
```
4. Build the application
``` bash
$ npm run build 
```
5. Put `.env` file sent by email to `sistem-alumni-web` directory. This file contains 2 environtment variables like so
```
BASE_API_URL=https://sistem-alumni-asysyaamil-api.herokuapp.com
PORT=3000
```
6. Run the application
``` bash
$ npm run start
```
7. Now you're application will run on port 3000
## Change Application's Port
1. Stop the application process
2. Open `.env` with your text editor of choice 
3. Change the `PORT` value
```
PORT=1234
```
4. Start the application 
```
$ npm run build && npm run start
```
## How to Update
1. Stop the application process 
```bash
$ killall node
```
2. Pull the updated version from 
```bash
$ git pull 
```
3. Reinstall dependencies 
```bash
$ npm install
``` 
4. Rebuild the application
```bash
$ npm run build
```
5. Run the application
```bash
$ npm run start
```