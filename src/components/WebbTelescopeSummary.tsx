
const nasaWebbYoutubeVideo:string="https://www.youtube.com/embed/cN0JrstP_Lw?auplay=1&mute=1&loop=1&playlist=cN0JrstP_Lw";

const WebbTelescopeSummary = () => {
  return (
    <div>
        <iframe 
        src={nasaWebbYoutubeVideo} 
        height="100%" 
        width="100%" 
        allow="autoplay"
        className="min-h-[500px]"></iframe>
    </div>
  )
}
export default WebbTelescopeSummary