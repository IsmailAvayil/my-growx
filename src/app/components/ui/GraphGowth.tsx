import Image from "next/image";
import React from "react";

const GraphGowth = () => {
  return (
    <div className="relative">
      <div></div>
      <div className="absolute top-0 right-0">
        <div className="relative">
          <Image
            src="assets/images/xs-graph.svg"
            alt="graph"
            width={145}
            height={185}
            className=""
          />
          <Image
            src="assets/images/10percentage.svg"
            alt="graph"
            width={80.53}
            height={39.59}
            className="absolute top-3 left-7"
          />
        </div>
      </div>
      <div className="absolute top-[80px] right-[57px]">
        <div className="relative">
          <Image
            src="assets/images/25percentage.svg"
            alt="graph"
            width={80.53}
            height={39.59}
            className="absolute top-3 left-7"
          />
        </div>
        <Image
          src="assets/images/small-graph.svg"
          alt="graph"
          width={220}
          height={141}
          className=""
        />
      </div>
      <div className="absolute top-[157px] right-[115px]">
        <div className="relative">
          {" "}
          <Image
            src="assets/images/40percentage.svg"
            alt="graph"
            width={80.53}
            height={39.59}
            className="absolute top-3 left-7"
          />
        </div>
        <Image
          src="assets/images/medium-graph.svg"
          alt="graph"
          width={300}
          height={165}
          className=""
        />
      </div>
      <div className="absolute top-[235px] right-[155px]">
        <div className="relative">
          {" "}
          <Image
            src="assets/images/60percentage.svg"
            alt="graph"
            width={80.53}
            height={39.59}
            className="absolute top-3 left-7"
          />
        </div>
        <Image
          src="assets/images/large-grapgh.svg"
          alt="graph"
          width={405}
          height={200}
          className=""
        />
      </div>
    </div>
  );
};

export default GraphGowth;
