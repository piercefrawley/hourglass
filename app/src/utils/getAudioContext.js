let audioContext = null;

export default function getAudioContext() {
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  return audioContext;
}
