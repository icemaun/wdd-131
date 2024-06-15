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

    

    
    });
});
    