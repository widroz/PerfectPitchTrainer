export const generateRandomOctave = (from, to) => {
    let octave = Math.floor(Math.random() * (to - from + 1)) + from;
    console.log("Call to generateRandomOctave: " + octave);
    return octave
}