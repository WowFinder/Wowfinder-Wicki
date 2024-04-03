import React from "react";

function CustomGlobalHeader({title}:{title:string} ) {
    return (
      <header>
        <h1>
            {title}
        </h1>
      </header>
    );
  }

  export default CustomGlobalHeader;