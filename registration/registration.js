document.addEventListener("DOMContentLoaded", function() {
    let participantCount = 1; 
    
    const addButton = document.getElementById("add");
    const participantsFieldset = document.querySelector(".participants");
    
    addButton.addEventListener("click", function() {
        participantCount++; 
    
            
    const participantTemplate = document.querySelector(".participant1");
    const newParticipant = participantTemplate.cloneNode(true);
    
            
    newParticipant.classList.remove("participant1");
    newParticipant.classList.add("participant" + participantCount);
    
    newParticipant.querySelectorAll("[id]").forEach(function(element) {
        element.id = element.id + participantCount;
        });
    
            
    participantsFieldset.insertBefore(newParticipant, addButton);

    function submitForm(event) {
        event.preventDefault();
        
        const total = totalFees();
        const adultName = document.getElementById("adult_name").value;
        const successInfo = {
            adultName: adultName,
            numberOfParticipants: participantCount,
            totalFees: total.toFixed(2)  
          };

        }
        
        const successMessage = successTemplate(successInfo);
        const summarySection = document.getElementById("summary");
        summarySection.innerHTML = successMessage;
    
        function totalFees() {
            // the selector below lets us grab any element that has an id that begins with "fee"
            let feeElements = document.querySelectorAll("[id^=fee]");
            console.log(feeElements);
            feeElements = [...feeElements];
            const total = feeElements.reduce((acc, curr) => {
                const feeValue = parseFloat(curr.value) || 0;
                return acc + feeValue;
              }, 0);

              function successTemplate(info) {
                return `
                  <h2>Registration Summary</h2>
                  <p>Thank you, ${info.adultName}, for registering!</p>
                  <p>Total Participants: ${info.numberOfParticipants}</p>
                  <p>Total Fees: $${info.totalFees}</p>
                  <p>We look forward to seeing you at the camp!</p>
                `;
              }           
        
            element.style.display = "none";
        
        }            
    });
});
    