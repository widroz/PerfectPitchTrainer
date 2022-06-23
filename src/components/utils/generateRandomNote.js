export const generateRandomNote= (arrayOfNotes) => {
  const randomIndex = Math.floor(Math.random() * arrayOfNotes.length);
  console.log("Call to generateRandomNote: " + arrayOfNotes[randomIndex]);
  return arrayOfNotes[randomIndex];
}