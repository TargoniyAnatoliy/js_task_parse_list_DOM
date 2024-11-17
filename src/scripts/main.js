'use strict';

const workersList = document.querySelector('ul');
const workersArr = [...workersList.children];

workersList.innerHTML = '';

sortList(workersArr).forEach((worker) => workersList.append(worker));

function getSalary(worker) {
  const workerSalary = worker.getAttribute('data-salary').replaceAll('$', '');

  return parseFloat(workerSalary.replaceAll(',', ''));
}

function sortList(arr) {
  return arr.sort(
    (worker1, worker2) => getSalary(worker2) - getSalary(worker1),
  );
}
