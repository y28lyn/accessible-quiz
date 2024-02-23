type BarProps = {
  totalQuestions: number;
  currentQuestionIndex: number;
};

const ProgressionBar = ({ totalQuestions, currentQuestionIndex }: BarProps) => {
  const progressPercentage =
    ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-4 mb-2 text-[#0B3168]">
        <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
          Complété
        </h6>
        <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
          {Math.round(progressPercentage)}%
        </h6>
      </div>
      <div className="flex-start flex h-2.5 w-full border-2 overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
        <div
          className={`flex items-center justify-center h-full overflow-hidden break-all bg-[#0B3168] rounded-full`}
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressionBar;
