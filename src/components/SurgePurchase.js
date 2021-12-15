import '../styles/surgePurchase.css'
import { useEffect } from 'react'



function SurgePurchase({
  surge,
  setSurge,
  setPurchaseSurgeAbilities,
  selectedWeapon,
  damage,
  setDamage,
  range,
  setRange,
  pierce,
  setPierce,
  powerDieRolled,
  setPowerDieRolled,
  blast,
  setBlast,
  setThreatTokens
}) {

  let surgeAbilityArray = [];

  for (let key in selectedWeapon.surge) {
    surgeAbilityArray.push(selectedWeapon.surge[key])
  }

  useEffect(() => {
    if (surge <= 0) {
      setPurchaseSurgeAbilities(false)
    }
  }, [surge])

  function addSurgeHandler(surgeAbility) {
    // console.log(surgeAbility.type)
    if (surgeAbility.type === 'addDamage') {
      if (surgeAbility.cost > surge) {
        alert('You do not have enough surges to spend on this')
      } else {
        setDamage(damage => damage + surgeAbility.amount)
        setSurge(surge => surge - surgeAbility.cost)
      }
    }
    if (surgeAbility.type === 'addRange') {
      if (surgeAbility.cost > surge) {
        alert('You do not have enough surges to spend on this')
      } else {
        setRange(range => range + surgeAbility.amount)
        setSurge(surge => surge - surgeAbility.cost)
      }
    }
    if (surgeAbility.type === 'addPierce') {
      if (surgeAbility.cost > surge) {
        alert('You do not have enough surges to spend on this')
      } else {
        setPierce(pierce => pierce + surgeAbility.amount)
        setSurge(surge => surge - surgeAbility.cost)
      }
    }
    if (surgeAbility.type === 'addBlast') {
      if (surgeAbility.cost > surge) {
        alert('You do not have enough surges to spend on this')
      } else {
        setBlast(blast => blast + surgeAbility.amount)
        setSurge(surge => surge - surgeAbility.cost)
      }
    }
    if (surgeAbility.type === 'addDamagePierce') {
      setDamage(damage => damage + surgeAbility.damageAmount)
      setPierce(pierce => pierce + surgeAbility.pierceAmount)
      setSurge(surge => surge - surgeAbility.cost)
    }
    if (surgeAbility.type === 'removeThreat') {
      setThreatTokens(threatTokens => threatTokens - surgeAbility.amount)
      setSurge(surge => surge - surgeAbility.cost)
    }
    if (surgeAbility.type === 'doulbeDamage') {
      setDamage(damage => damage * 2)
      setSurge(surge => surge - surgeAbility.cost)
    }
    if (surgeAbility.type === 'instaKill') {
      setDamage(damage => damage * 1000)
      setSurge(surge => surge - surgeAbility.cost)
    }
  }





  useEffect(() => {
    dragElement(document.getElementById("surgePurchase"));
    function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
      } else {
        elmnt.onmousedown = dragMouseDown;
      }

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }

      function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
  }, [])

  return (
    <div id='surgePurchase'>
      <button onClick={() => setPurchaseSurgeAbilities(false)}>Close</button>
      <h2>Spend Surges </h2>
      <div id='surgeItems'>
        {surgeAbilityArray.map((surgeAbility, i) =>
          <div key={i}>
            <button onClick={() => addSurgeHandler(surgeAbility)}>
              {surgeAbility.text}
              <br />
              Surge Cost: {surgeAbility.cost}
            </button>
          </div>
        )}
      </div>

    </div>
  );
}

export default SurgePurchase;
