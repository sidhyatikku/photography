// Function to update time
 function updateTime() {
     const timeZones = {
         nycTime: 'America/New_York',
         delTime: 'Asia/Kolkata',
         parTime: 'Europe/Paris',
         dxbTime: 'Asia/Dubai',
         tokTime: 'Asia/Tokyo'
     };

     for (const [id, timeZone] of Object.entries(timeZones)) {
         const timeElement = document.getElementById(id);
         const now = new Date(new Date().toLocaleString('en-US', { timeZone }));
         const hours = String(now.getHours()).padStart(2, '0');
         const minutes = String(now.getMinutes()).padStart(2, '0');
         timeElement.textContent = `${hours}${minutes}hrs`;
     }
 }

 // Update time every minute
 setInterval(updateTime, 60000);
 updateTime(); // Initial call to set the time immediately
