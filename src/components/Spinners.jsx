const Spinner = () => {
  return (
    <div className="mx-auto my-20 aspect-square w-16 animate-spin rounded-full mask-[radial-gradient(farthest-side,#0000_calc(100%-10px),#000_0)] [background:radial-gradient(farthest-side,theme(colors.blue.600)_94%,#0000)_top/10px_10px_no-repeat,conic-gradient(#0000_30%,theme(colors.blue.600))]" />
  );
};

export default Spinner;
