const scriptURL = "https://script.google.com/macros/s/AKfycbzyIR8djTMa4CBLbytZmzPVMo9L6UhZUDFnaozdme8rq9skkwI-X95Bzgx3LTa7b1FoZw/exec";

const contactForm = document.getElementById("contactForm");
const submissionResult = document.getElementById("submission-result");
const submissionStatus = document.getElementById("submission-status");
const displayInfo = document.getElementById("displayInfo");

if (
    !(contactForm instanceof HTMLFormElement) ||
    !(submissionResult instanceof HTMLElement) ||
    !(submissionStatus instanceof HTMLElement) ||
    !(displayInfo instanceof HTMLElement)
) {
    throw new Error("The contact form is missing required page elements.");
}

contactForm.addEventListener("submit", async event => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const entries = [
        ["Name", formData.get("name")],
        ["Email", formData.get("email")],
        ["Contact Number", formData.get("phone")],
        ["Gender", formData.get("gender")]
    ];

    displayInfo.replaceChildren();
    entries.forEach(([label, value]) => {
        const term = document.createElement("dt");
        const description = document.createElement("dd");
        term.textContent = label;
        description.textContent = String(value ?? "");
        displayInfo.append(term, description);
    });

    submissionResult.hidden = false;
    submissionStatus.textContent = "Sending your information...";

    try {
        const response = await fetch(scriptURL, {
            method: "POST",
            body: new URLSearchParams({
                name: String(formData.get("name") ?? ""),
                email: String(formData.get("email") ?? ""),
                phone: String(formData.get("phone") ?? ""),
                gender: String(formData.get("gender") ?? "")
            })
        });

        if (!response.ok) {
            throw new Error(`The contact service returned ${response.status}.`);
        }

        submissionStatus.textContent = "Your information was sent successfully.";
        contactForm.reset();
    } catch (error) {
        console.error("Unable to submit the contact form:", error);
        submissionStatus.textContent =
            "We could not send your information. Please try again.";
    }
});