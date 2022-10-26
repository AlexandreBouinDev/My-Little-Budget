import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";
import { RawDataToGraph } from "../../utils/RawDataToGraph";

interface IDataProps {
  name: string;
  uv: number;
  pv: string;
  amt: number;
}

export function Graph() {
  const [data, setData] = useState<Array<IDataProps>>([]);
  const cards = useSelector((state: any) => state.cards);

  useEffect(() => {
    setData(RawDataToGraph(cards));
  }, [cards]);

  function CustomTooltip({ payload }: any) {
    console.log(payload);
    return <div>Valeur : {payload[0]?.payload?.amt ?? ""}</div>;
  }

  return (
    <div>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line connectNulls type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}

/*
data =
[
    {
        "name": "01/10",
        "uv": 1600,
        "pv": "635798cc56737458f1ac0689"
    },
    {
        "name": "03/10",
        "uv": -550,
        "pv": "635798e456737458f1ac068d"
    },
    {
        "name": "07/10",
        "uv": -50,
        "pv": "635798fa56737458f1ac0691"
    },
    {
        "name": "10/10",
        "uv": 100,
        "pv": "6357990756737458f1ac0695"
    },
    {
        "name": "19/10",
        "uv": -25,
        "pv": "6357991b56737458f1ac0699"
    },
    {
        "name": "22/10",
        "uv": -75,
        "pv": "6357993756737458f1ac069d"
    },
    {
        "name": "27/10",
        "uv": -25,
        "pv": "6357997e56737458f1ac06a1"
    },
    {
        "name": "28/10",
        "uv": -30,
        "pv": "635799a356737458f1ac06a5"
    },
    {
        "name": "01/11",
        "uv": 1600,
        "pv": "635799b256737458f1ac06a9"
    }
]
*/
