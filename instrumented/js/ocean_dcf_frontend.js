function cov_4oadpljy5(){var path="C:\\Users\\aslam\\Desktop\\dvops-project-dcf-aslam\\public\\js\\ocean_dcf_frontend.js";var hash="dfd82f1f5e983c783f17a04a42897f2d41afd342";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\aslam\\Desktop\\dvops-project-dcf-aslam\\public\\js\\ocean_dcf_frontend.js",statementMap:{"0":{start:{line:1,column:0},end:{line:26,column:2}},"1":{start:{line:2,column:25},end:{line:2,column:63}},"2":{start:{line:3,column:2},end:{line:3,column:41}},"3":{start:{line:5,column:2},end:{line:25,column:3}},"4":{start:{line:6,column:21},end:{line:12,column:6}},"5":{start:{line:14,column:4},end:{line:18,column:5}},"6":{start:{line:15,column:24},end:{line:15,column:45}},"7":{start:{line:16,column:6},end:{line:16,column:60}},"8":{start:{line:17,column:6},end:{line:17,column:12}},"9":{start:{line:20,column:17},end:{line:20,column:38}},"10":{start:{line:21,column:4},end:{line:21,column:43}},"11":{start:{line:23,column:4},end:{line:23,column:51}},"12":{start:{line:24,column:4},end:{line:24,column:75}},"13":{start:{line:30,column:4},end:{line:30,column:69}},"14":{start:{line:32,column:2},end:{line:32,column:21}},"15":{start:{line:34,column:2},end:{line:34,column:69}},"16":{start:{line:36,column:16},end:{line:36,column:56}},"17":{start:{line:38,column:2},end:{line:59,column:6}},"18":{start:{line:49,column:6},end:{line:55,column:7}},"19":{start:{line:50,column:21},end:{line:50,column:42}},"20":{start:{line:51,column:8},end:{line:51,column:52}},"21":{start:{line:52,column:8},end:{line:52,column:72}},"22":{start:{line:54,column:8},end:{line:54,column:50}},"23":{start:{line:58,column:6},end:{line:58,column:53}},"24":{start:{line:63,column:19},end:{line:63,column:45}},"25":{start:{line:64,column:2},end:{line:64,column:20}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:1,column:46},end:{line:1,column:47}},loc:{start:{line:1,column:64},end:{line:26,column:1}},line:1},"1":{name:"earnCredits",decl:{start:{line:28,column:9},end:{line:28,column:20}},loc:{start:{line:28,column:23},end:{line:60,column:1}},line:28},"2":{name:"(anonymous_2)",decl:{start:{line:48,column:10},end:{line:48,column:11}},loc:{start:{line:48,column:30},end:{line:56,column:5}},line:48},"3":{name:"(anonymous_3)",decl:{start:{line:57,column:11},end:{line:57,column:12}},loc:{start:{line:57,column:22},end:{line:59,column:5}},line:57},"4":{name:"playClickSound",decl:{start:{line:62,column:9},end:{line:62,column:23}},loc:{start:{line:62,column:26},end:{line:65,column:1}},line:62}},branchMap:{"0":{loc:{start:{line:14,column:4},end:{line:18,column:5}},type:"if",locations:[{start:{line:14,column:4},end:{line:18,column:5}},{start:{line:undefined,column:undefined},end:{line:undefined,column:undefined}}],line:14},"1":{loc:{start:{line:30,column:4},end:{line:30,column:69}},type:"binary-expr",locations:[{start:{line:30,column:4},end:{line:30,column:64}},{start:{line:30,column:68},end:{line:30,column:69}}],line:30},"2":{loc:{start:{line:49,column:6},end:{line:55,column:7}},type:"if",locations:[{start:{line:49,column:6},end:{line:55,column:7}},{start:{line:53,column:13},end:{line:55,column:7}}],line:49}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0},b:{"0":[0,0],"1":[0,0],"2":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"dfd82f1f5e983c783f17a04a42897f2d41afd342"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_4oadpljy5=function(){return actualCoverage;};}return actualCoverage;}cov_4oadpljy5();cov_4oadpljy5().s[0]++;document.addEventListener("DOMContentLoaded",async function(){cov_4oadpljy5().f[0]++;const balanceElement=(cov_4oadpljy5().s[1]++,document.getElementById("userbalance"));cov_4oadpljy5().s[2]++;balanceElement.innerText="loading...";cov_4oadpljy5().s[3]++;try{const response=(cov_4oadpljy5().s[4]++,await fetch("/user/balance",{method:"GET",headers:{Authorization:`Bearer ${window.localStorage.getItem("authToken")}`,"Content-Type":"application/json"}}));cov_4oadpljy5().s[5]++;if(!response.ok){cov_4oadpljy5().b[0][0]++;const errorData=(cov_4oadpljy5().s[6]++,await response.json());cov_4oadpljy5().s[7]++;balanceElement.innerText=`Error: ${errorData.error}`;cov_4oadpljy5().s[8]++;return;}else{cov_4oadpljy5().b[0][1]++;}const data=(cov_4oadpljy5().s[9]++,await response.json());cov_4oadpljy5().s[10]++;balanceElement.innerText=data.balance;}catch(error){cov_4oadpljy5().s[11]++;console.error("Error fetching balance:",error);cov_4oadpljy5().s[12]++;balanceElement.innerText="Failed to fetch balance. Please try again.";}});function earnCredits(){cov_4oadpljy5().f[1]++;let currentBalance=(cov_4oadpljy5().s[13]++,(cov_4oadpljy5().b[1][0]++,parseInt(document.getElementById("userbalance").textContent))||(cov_4oadpljy5().b[1][1]++,0));cov_4oadpljy5().s[14]++;currentBalance+=1;cov_4oadpljy5().s[15]++;document.getElementById("userbalance").textContent=currentBalance;const token=(cov_4oadpljy5().s[16]++,window.localStorage.getItem("authToken"));cov_4oadpljy5().s[17]++;fetch(`/user/balance`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${token}`},body:JSON.stringify({balance:currentBalance})}).then(async response=>{cov_4oadpljy5().f[2]++;cov_4oadpljy5().s[18]++;if(response.ok){cov_4oadpljy5().b[2][0]++;const body=(cov_4oadpljy5().s[19]++,await response.json());cov_4oadpljy5().s[20]++;console.log("Balance updated successfully.");cov_4oadpljy5().s[21]++;document.getElementById("user-balance").innerText=body.balance;}else{cov_4oadpljy5().b[2][1]++;cov_4oadpljy5().s[22]++;console.error("Failed to update balance.");}}).catch(error=>{cov_4oadpljy5().f[3]++;cov_4oadpljy5().s[23]++;console.error("Error updating balance:",error);});}function playClickSound(){cov_4oadpljy5().f[4]++;var clickSound=(cov_4oadpljy5().s[24]++,new Audio('coinsound.mp3'));cov_4oadpljy5().s[25]++;clickSound.play();}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfNG9hZHBsank1IiwiYWN0dWFsQ292ZXJhZ2UiLCJzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZiIsImJhbGFuY2VFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lclRleHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib2siLCJiIiwiZXJyb3JEYXRhIiwianNvbiIsImVycm9yIiwiZGF0YSIsImJhbGFuY2UiLCJjb25zb2xlIiwiZWFybkNyZWRpdHMiLCJjdXJyZW50QmFsYW5jZSIsInBhcnNlSW50IiwidGV4dENvbnRlbnQiLCJ0b2tlbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsImxvZyIsImNhdGNoIiwicGxheUNsaWNrU291bmQiLCJjbGlja1NvdW5kIiwiQXVkaW8iLCJwbGF5Il0sInNvdXJjZXMiOlsib2NlYW5fZGNmX2Zyb250ZW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBiYWxhbmNlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcmJhbGFuY2VcIilcclxuICBiYWxhbmNlRWxlbWVudC5pbm5lclRleHQgPSBcImxvYWRpbmcuLi5cIlxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi91c2VyL2JhbGFuY2VcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7d2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFRva2VuXCIpfWAsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG5cclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgY29uc3QgZXJyb3JEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgIGJhbGFuY2VFbGVtZW50LmlubmVyVGV4dCA9IGBFcnJvcjogJHtlcnJvckRhdGEuZXJyb3J9YFxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICBiYWxhbmNlRWxlbWVudC5pbm5lclRleHQgPSBkYXRhLmJhbGFuY2VcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGJhbGFuY2U6XCIsIGVycm9yKVxyXG4gICAgYmFsYW5jZUVsZW1lbnQuaW5uZXJUZXh0ID0gXCJGYWlsZWQgdG8gZmV0Y2ggYmFsYW5jZS4gUGxlYXNlIHRyeSBhZ2Fpbi5cIlxyXG4gIH1cclxufSlcclxuXHJcbmZ1bmN0aW9uIGVhcm5DcmVkaXRzKCkge1xyXG4gIGxldCBjdXJyZW50QmFsYW5jZSA9XHJcbiAgICBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJiYWxhbmNlXCIpLnRleHRDb250ZW50KSB8fCAwXHJcblxyXG4gIGN1cnJlbnRCYWxhbmNlICs9IDFcclxuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyYmFsYW5jZVwiKS50ZXh0Q29udGVudCA9IGN1cnJlbnRCYWxhbmNlXHJcblxyXG4gIGNvbnN0IHRva2VuID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFRva2VuXCIpXHJcblxyXG4gIGZldGNoKGAvdXNlci9iYWxhbmNlYCwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgYmFsYW5jZTogY3VycmVudEJhbGFuY2UsXHJcbiAgICB9KSxcclxuICB9KVxyXG4gICAgLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkJhbGFuY2UgdXBkYXRlZCBzdWNjZXNzZnVsbHkuXCIpXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyLWJhbGFuY2VcIikuaW5uZXJUZXh0ID0gYm9keS5iYWxhbmNlXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byB1cGRhdGUgYmFsYW5jZS5cIilcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGJhbGFuY2U6XCIsIGVycm9yKVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gcGxheUNsaWNrU291bmQoKSB7XHJcbiAgdmFyIGNsaWNrU291bmQgPSBuZXcgQXVkaW8oJ2NvaW5zb3VuZC5tcDMnKTtcclxuICBjbGlja1NvdW5kLnBsYXkoKTtcclxufSJdLCJtYXBwaW5ncyI6InlsSEFlWTtBQUFBQSxhQUFBLFNBQUFBLENBQUEsU0FBQUMsY0FBQSxXQUFBQSxjQUFBLEVBQUFELGFBQUEsR0FBQUEsYUFBQSxHQUFBRSxDQUFBLE1BZlpDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUUsZ0JBQWtCLENBQUFKLGFBQUEsR0FBQUssQ0FBQSxNQUM5RCxLQUFNLENBQUFDLGNBQWMsRUFBQU4sYUFBQSxHQUFBRSxDQUFBLE1BQUdDLFFBQVEsQ0FBQ0ksY0FBYyxDQUFDLGFBQWEsQ0FBQyxFQUFBUCxhQUFBLEdBQUFFLENBQUEsTUFDN0RJLGNBQWMsQ0FBQ0UsU0FBUyxDQUFHLFlBQVksQ0FBQVIsYUFBQSxHQUFBRSxDQUFBLE1BRXZDLEdBQUksQ0FDRixLQUFNLENBQUFPLFFBQVEsRUFBQVQsYUFBQSxHQUFBRSxDQUFBLE1BQUcsS0FBTSxDQUFBUSxLQUFLLENBQUMsZUFBZSxDQUFFLENBQzVDQyxNQUFNLENBQUUsS0FBSyxDQUNiQyxPQUFPLENBQUUsQ0FDUEMsYUFBYSxDQUFFLFVBQVVDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FDbkUsY0FBYyxDQUFFLGtCQUNsQixDQUNGLENBQUMsQ0FBQyxFQUFBaEIsYUFBQSxHQUFBRSxDQUFBLE1BRUYsR0FBSSxDQUFDTyxRQUFRLENBQUNRLEVBQUUsQ0FBRSxDQUFBakIsYUFBQSxHQUFBa0IsQ0FBQSxTQUNoQixLQUFNLENBQUFDLFNBQVMsRUFBQW5CLGFBQUEsR0FBQUUsQ0FBQSxNQUFHLEtBQU0sQ0FBQU8sUUFBUSxDQUFDVyxJQUFJLENBQUMsQ0FBQyxFQUFBcEIsYUFBQSxHQUFBRSxDQUFBLE1BQ3ZDSSxjQUFjLENBQUNFLFNBQVMsQ0FBRyxVQUFVVyxTQUFTLENBQUNFLEtBQUssRUFBRSxDQUFBckIsYUFBQSxHQUFBRSxDQUFBLE1BQ3RELE9BQ0YsQ0FBQyxLQUFBRixhQUFBLEdBQUFrQixDQUFBLFVBRUQsS0FBTSxDQUFBSSxJQUFJLEVBQUF0QixhQUFBLEdBQUFFLENBQUEsTUFBRyxLQUFNLENBQUFPLFFBQVEsQ0FBQ1csSUFBSSxDQUFDLENBQUMsRUFBQXBCLGFBQUEsR0FBQUUsQ0FBQSxPQUNsQ0ksY0FBYyxDQUFDRSxTQUFTLENBQUdjLElBQUksQ0FBQ0MsT0FBTyxDQUN6QyxDQUFFLE1BQU9GLEtBQUssQ0FBRSxDQUFBckIsYUFBQSxHQUFBRSxDQUFBLE9BQ2RzQixPQUFPLENBQUNILEtBQUssQ0FBQyx5QkFBeUIsQ0FBRUEsS0FBSyxDQUFDLENBQUFyQixhQUFBLEdBQUFFLENBQUEsT0FDL0NJLGNBQWMsQ0FBQ0UsU0FBUyxDQUFHLDRDQUE0QyxDQUN6RSxDQUNGLENBQUMsQ0FBQyxDQUVGLFFBQVMsQ0FBQWlCLFdBQVdBLENBQUEsQ0FBRyxDQUFBekIsYUFBQSxHQUFBSyxDQUFBLE1BQ3JCLEdBQUksQ0FBQXFCLGNBQWMsRUFBQTFCLGFBQUEsR0FBQUUsQ0FBQSxPQUNoQixDQUFBRixhQUFBLEdBQUFrQixDQUFBLFNBQUFTLFFBQVEsQ0FBQ3hCLFFBQVEsQ0FBQ0ksY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDcUIsV0FBVyxDQUFDLElBQUE1QixhQUFBLEdBQUFrQixDQUFBLFNBQUksQ0FBQyxHQUFBbEIsYUFBQSxHQUFBRSxDQUFBLE9BRW5Fd0IsY0FBYyxFQUFJLENBQUMsQ0FBQTFCLGFBQUEsR0FBQUUsQ0FBQSxPQUVuQkMsUUFBUSxDQUFDSSxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUNxQixXQUFXLENBQUdGLGNBQWMsQ0FFbkUsS0FBTSxDQUFBRyxLQUFLLEVBQUE3QixhQUFBLEdBQUFFLENBQUEsT0FBR1ksTUFBTSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBQWhCLGFBQUEsR0FBQUUsQ0FBQSxPQUV0RFEsS0FBSyxDQUFDLGVBQWUsQ0FBRSxDQUNyQkMsTUFBTSxDQUFFLE1BQU0sQ0FDZEMsT0FBTyxDQUFFLENBQ1AsY0FBYyxDQUFFLGtCQUFrQixDQUNsQ0MsYUFBYSxDQUFFLFVBQVVnQixLQUFLLEVBQ2hDLENBQUMsQ0FDREMsSUFBSSxDQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUNuQlQsT0FBTyxDQUFFRyxjQUNYLENBQUMsQ0FDSCxDQUFDLENBQUMsQ0FDQ08sSUFBSSxDQUFDLEtBQU8sQ0FBQXhCLFFBQVEsRUFBSyxDQUFBVCxhQUFBLEdBQUFLLENBQUEsTUFBQUwsYUFBQSxHQUFBRSxDQUFBLE9BQ3hCLEdBQUlPLFFBQVEsQ0FBQ1EsRUFBRSxDQUFFLENBQUFqQixhQUFBLEdBQUFrQixDQUFBLFNBQ2YsS0FBTSxDQUFBWSxJQUFJLEVBQUE5QixhQUFBLEdBQUFFLENBQUEsT0FBRyxLQUFNLENBQUFPLFFBQVEsQ0FBQ1csSUFBSSxDQUFDLENBQUMsRUFBQXBCLGFBQUEsR0FBQUUsQ0FBQSxPQUNsQ3NCLE9BQU8sQ0FBQ1UsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUFsQyxhQUFBLEdBQUFFLENBQUEsT0FDNUNDLFFBQVEsQ0FBQ0ksY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDQyxTQUFTLENBQUdzQixJQUFJLENBQUNQLE9BQU8sQ0FDbEUsQ0FBQyxJQUFNLENBQUF2QixhQUFBLEdBQUFrQixDQUFBLFNBQUFsQixhQUFBLEdBQUFFLENBQUEsT0FDTHNCLE9BQU8sQ0FBQ0gsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQzVDLENBQ0YsQ0FBQyxDQUFDLENBQ0RjLEtBQUssQ0FBRWQsS0FBSyxFQUFLLENBQUFyQixhQUFBLEdBQUFLLENBQUEsTUFBQUwsYUFBQSxHQUFBRSxDQUFBLE9BQ2hCc0IsT0FBTyxDQUFDSCxLQUFLLENBQUMseUJBQXlCLENBQUVBLEtBQUssQ0FBQyxDQUNqRCxDQUFDLENBQUMsQ0FDTixDQUVBLFFBQVMsQ0FBQWUsY0FBY0EsQ0FBQSxDQUFHLENBQUFwQyxhQUFBLEdBQUFLLENBQUEsTUFDeEIsR0FBSSxDQUFBZ0MsVUFBVSxFQUFBckMsYUFBQSxHQUFBRSxDQUFBLE9BQUcsR0FBSSxDQUFBb0MsS0FBSyxDQUFDLGVBQWUsQ0FBQyxFQUFDdEMsYUFBQSxHQUFBRSxDQUFBLE9BQzVDbUMsVUFBVSxDQUFDRSxJQUFJLENBQUMsQ0FBQyxDQUNuQiIsImlnbm9yZUxpc3QiOltdfQ==