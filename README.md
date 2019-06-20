# Paint Redirect POC 
## We need to determine if the paint timing api includes redirects

In order to run this locally you will need to update your hosts file to have 

These three sites will need to be pointed to the local loopback ip 
- site1.com
- site2.com
- site3.com 

to point to 127.0.0.1

## Updating your hosts 
run > `sudo nano /etc/hosts` 

eg: 
site1.com 127.0.0.1


## Results 
The paint timing API does include all redirect time from the source domain, regardless of the origin being a different domain
