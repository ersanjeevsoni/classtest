const handleStart = () => {
  document.getElementById("model").style.display = 'block';
  document.getElementById('start_btn').style.display = 'none';
}

const handleOnOff = () => {
  const val = document.getElementById('number').value;
  const parentTag = document.getElementById("image-box");

  document.getElementById("image-box").style.display = 'block';
  document.getElementById('model').style.display = 'none';

  //parentTag.innerHTML = ''; // Clear previous images and buttons

  for (let i = 0; i < val; i++) {
    
    // Create image element
    const imgTag = document.createElement("img");
    imgTag.setAttribute('src', 'images/Light_Bulb_Off.png');
    imgTag.style.display = 'block';
    parentTag.appendChild(imgTag);

    // Create 'On' button
    const onButton = document.createElement("button");
    onButton.textContent = 'Turn On';
    onButton.style.backgroundColor = 'green';
    onButton.onclick = () => {
      imgTag.setAttribute('src', 'images/Light_Bulb_On.png');
      onButton.style.display = 'none';
      offButton.style.display = 'block';
    };
    parentTag.appendChild(onButton);

    // Create 'Off' button
    const offButton = document.createElement("button");
    offButton.textContent = 'Turn Off';
    offButton.style.backgroundColor = 'red';
    offButton.style.display = 'none'; // Initially hidden
    offButton.onclick = () => {
      imgTag.setAttribute('src', 'images/Light_Bulb_Off.png');
      offButton.style.display = 'none';
      onButton.style.display = 'block';
    };
    parentTag.appendChild(offButton);
  }
}
