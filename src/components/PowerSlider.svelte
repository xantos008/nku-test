<script lang="ts">
    import { power, setPower } from "../cli";
    
    function handleInput(event: Event) {
      const value = parseInt((event.target as HTMLInputElement).value);
      setPower(value);
    }
  </script>
  
  <div id="power">
    <h2>Мощность:</h2>
    <h1>{$power}</h1>
    <input type="range" min="0" max="100" step="1" bind:value={$power} on:input={handleInput} />
  </div>

  <style>
    #power{
      text-align: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      height: 100vh;
      flex-direction: column;
    }
    #power input {
      max-width: 200px;
      margin: 0 auto;
    }
  </style>