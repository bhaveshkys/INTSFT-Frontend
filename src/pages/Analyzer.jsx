import React, { useState } from "react";
import TextBox from "../components/TextBox";
import AnalyzeBox from "../components/AnalyzeBox";
import IconButonUpload from "../components/IconButonUpload";
import axios from "axios";
const Analyzer = () => {
  const [textBoxContent, setTextBoxContent] = useState("");
  const [wordCloudImageNeg, setWordCloudImageNeg] = useState();
  const [wordCloudImagePos, setWordCloudImagePos] = useState();
  const [sentimentImagePos, setSentimentImagePos] = useState();
  const [dataView, setDataView] = useState();

  const sentiment = () => {
    if (textBoxContent.trim() === "") {
      alert("no text found");
      return;
    } else {
      const formData = new FormData();
      formData.append(
        "file",
        new Blob([textBoxContent], { type: "text/plain" }),
        "file.txt",
      );
      axios
        .post(
          "https://container-service-1.d2iptfhh6bpj6.ap-south-1.cs.amazonlightsail.com/api/plot",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        )
        .then((response) => {
          setDataView("sentiment");
          const sentimentUrl = response.data.plot;

          // Decode the base64-encoded URL
          setSentimentImagePos(sentimentUrl);
        })
        .catch((error) => {
          console.error("Error sending data to server:", error);
        });
    }
  };

  const axiosConfig = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    maxContentLength: Infinity, // Set maxContentLength to infinity
  };
  const wordcloud = () => {
    if (textBoxContent.trim() === "") {
      alert("no text found");
      return;
    } else {
      const formData = new FormData();
      formData.append(
        "file",
        new Blob([textBoxContent], { type: "text/plain" }),
        "file.txt",
      );
      axios
        .all([
          axios.post(
            "https://container-service-1.d2iptfhh6bpj6.ap-south-1.cs.amazonlightsail.com/api/convert/pos",
            formData,
            axiosConfig,
          ),
          axios.post(
            "https://container-service-1.d2iptfhh6bpj6.ap-south-1.cs.amazonlightsail.com/api/convert/neg",
            formData,
            axiosConfig,
          ),
        ])
        .then(
          axios.spread((posData, negData) => {
            setDataView("wordcloud");
            const wordCloudUrlPos = posData.data.wordcloud_url;
            const wordCloudUrlNeg = negData.data.wordcloud_url;
            // Decode the base64-encoded URL
            setWordCloudImageNeg(wordCloudUrlPos);
            setWordCloudImagePos(wordCloudUrlNeg);
            console.log(wordCloudImagePos);
          }),
        )
        .catch((error) => {
          console.error("Error sending data to server:", error);
        });
      /* axios.post('http://127.0.0.1:5000/api/convert/neg', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        const wordCloudUrl = response.data.wordcloud_url;

        // Decode the base64-encoded URL
        setWordCloudImageNeg(wordCloudUrl)
      })
      .catch(error => {
        console.error('Error sending data to server:', error);
      }); */
    }
  };
  const handleFileInput = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setTextBoxContent(e.target.result);
      };
      reader.readAsText(file);
    }
  };
  return (
    <div
      style={{
        height: "92vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <TextBox
          setTextBoxContent={setTextBoxContent}
          textBoxContent={textBoxContent}
        />
        {/* <TextButton content={"Upload Text File"} clickFunc={()=> {return 0}} /> */}
        <IconButonUpload
          component={"Upload Text File"}
          handleFileInput={handleFileInput}
        />
      </div>
      <AnalyzeBox
        wordCloudImageNeg={wordCloudImageNeg}
        wordCloudImagePos={wordCloudImagePos}
        wordcloud={wordcloud}
        sentiment={sentiment}
        sentimentImagePos={sentimentImagePos}
        dataView={dataView}
      />
    </div>
  );
};

export default Analyzer;
