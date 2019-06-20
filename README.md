# Paint Redirect POC 
## Hypothesis: Paint timing api navigationStart includes redirect time regardless of host origins

In order to accomplish this we are creating a single node server, and then pointing three different 
domains (via your hosts file) to the local loopback ip. 

### Step 1 : Update hosts file 
_Example hosts File_
```  File: /etc/hosts
   
   ##
   # Host Database
   #
   # localhost is used to configure the loopback interface
   # when the system is booting.  Do not change this entry.
   ##
   127.0.0.1       localhost
   255.255.255.255 broadcasthost
   ::1             localhost
   127.0.0.1       site1.com
   127.0.0.1       site2.com
   127.0.0.1       site3.com
   ```
   

_command to update your host on mac_
run > `sudo nano /etc/hosts` 

### Step 2: Run npm start and browse to site1.com 
### Step 3: Click on the ```Click With Redir ``` link
This will send you to site2.com/redir which has a 5 second timeout

It will then redirect you to Site3.com/land which prints out the fcp time in the console


## Conclusion: 
The window.performance.timing.navigationStart includes all redirect time regardless of host origin. Whenyou land on  it
site3.com/land it prints out the total time from navigation start including the 5 second delay in Site2.com's redirect
```<script type="text/javascript">
       setTimeout(() => {
           console.log(Date.now() - window.performance.timing.navigationStart);
       },0);
   </script>
   ```

## Reference
https://www.w3.org/TR/navigation-timing/ 

https://developer.mozilla.org/en-US/docs/Web/API/PerformancePaintTiming

## Acronyms 
FCP: first contentful paint

FP: first paint

