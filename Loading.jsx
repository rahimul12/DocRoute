import LoadingAnimation from "../assets/loading/docLoading.json";
import Lottie from "lottie-react"

const Loading = () => {
    return (
        <div className="h-screen flex items-center justify-center text-white">
            <Lottie loop={true} animationData={LoadingAnimation}/>
        </div>
    );
};

export default Loading;