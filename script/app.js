const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    // элемент НАД 
    placeholder.addEventListener('dragover', dragover)
    // внутри 
    placeholder.addEventListener('dragenter', dragenter)
    // перетащили/вышли
    placeholder.addEventListener('dragleave', dragleave)
    // отпустили
    placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0);

}
function dragend(event) {
    // event.target.classList.remove('hold', 'hide')
    // event.target.classList.remove('hide')
    event.target.className = 'item'

}

function dragover(event) { event.preventDefault() }

function dragenter(event) { event.target.classList.add('hovered', 'background_drop') }

function dragleave(event) { event.target.classList.remove('hovered', 'background_drop') }

function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}