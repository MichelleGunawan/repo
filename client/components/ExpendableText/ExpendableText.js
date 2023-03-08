import React, { useState } from "react";
import { Text, TouchableWithoutFeedback } from "react-native";

function ExpandableText({ text }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <TouchableWithoutFeedback onPress={toggleExpanded}>
      <Text
        style={{ fontSize: 16, lineHeight: 24 }}
        numberOfLines={expanded ? undefined : 3}
        ellipsizeMode="tail">
        {text}
      </Text>
    </TouchableWithoutFeedback>
  );
}

export default ExpandableText;
