import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { FiEdit2, FiTrash2, FiCalendar } from 'react-icons/fi';
import {
  CardSC, CheckboxSC, InfoSC, TaskTitleSC, DescriptionSC,
  MetaSC, PriorityBadgeSC, DateLabelSC, ActionsSC, ActionBtnSC
} from './TaskItem.style';

const priorityLabel = { high: '🔴 Alta', medium: '🟡 Média', low: '🟢 Baixa' };

export default function TaskItem({ task, onToggle, onEdit, onDelete }) {
  const isOverdue = task.due_date && !task.completed && new Date(task.due_date) < new Date();

  return (
    <CardSC $completed={task.completed}>
      <CheckboxSC $completed={task.completed} onClick={() => onToggle(task.id)} />

      <InfoSC>
        <TaskTitleSC $completed={task.completed}>{task.title}</TaskTitleSC>
        {task.description && <DescriptionSC>{task.description}</DescriptionSC>}
        <MetaSC>
          <PriorityBadgeSC $priority={task.priority}>
            {priorityLabel[task.priority]}
          </PriorityBadgeSC>
          {task.due_date && (
            <DateLabelSC $overdue={isOverdue}>
              <FiCalendar size={12} />
              {isOverdue ? '⚠ ' : ''}
              {format(new Date(task.due_date), "dd 'de' MMM", { locale: ptBR })}
            </DateLabelSC>
          )}
        </MetaSC>
      </InfoSC>

      <ActionsSC>
        <ActionBtnSC onClick={() => onEdit(task)}><FiEdit2 size={15} /></ActionBtnSC>
        <ActionBtnSC $danger onClick={() => onDelete(task.id)}><FiTrash2 size={15} /></ActionBtnSC>
      </ActionsSC>
    </CardSC>
  );
}