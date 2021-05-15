# Sistem Alumni - Frontend Web
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
npm run build 
```
5. Put `.env` file sent by email to `sistem-alumni-web` directory
6. Run the application
``` bash
npm run start
```
7. Now you're application will run on port 3000
## Change Application's Port
1. Open `nuxt.config.js` with your text editor of choice 
2. Change the port setting 
```
server: {
  port: 1234 // default: 3000
},
```